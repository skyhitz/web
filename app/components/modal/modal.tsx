import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import Portal from 'react-minimalist-portal';
import CSSTransition from 'react-transition-group/CSSTransition';
import cx from 'classnames';
import noScroll from 'no-scroll';
import CloseIcon from './close-icon';
import modalManager from './modal-manager';
import './styles.scss';
import { Props } from './modal-props';

class Modal extends Component<Props, any> {
  static defaultProps: {
    classes: any;
    closeOnEsc: boolean;
    closeOnOverlayClick: boolean;
    onEntered: any;
    onExited: any;
    onEscKeyDown: any;
    onOverlayClick: any;
    showCloseIcon: boolean;
    closeIconSize: number;
    closeIconSvgPath: JSX.Element;
    classNames: {};
    styles: {};
    children: any;
    center: boolean;
    animationDuration: number;
  };
  shouldClose: any;
  static propTypes: {
    /**
     * Is the modal closable when user press esc key.
     */
    closeOnEsc: PropTypes.Requireable<boolean>;
    /**
     * Is the modal closable when user click on overlay.
     */
    closeOnOverlayClick: PropTypes.Requireable<boolean>;
    /**
     * Callback fired when the Modal is open and the animation is finished.
     */
    onEntered: PropTypes.Requireable<(...args: any[]) => any>;
    /**
     * Callback fired when the Modal has exited and the animation is finished.
     */
    onExited: PropTypes.Requireable<(...args: any[]) => any>;
    /**
     * Callback fired when the Modal is requested to be closed by a click on the overlay or when user press esc key.
     */
    onClose: PropTypes.Validator<(...args: any[]) => any>;
    /**
     * Callback fired when the escape key is pressed.
     */
    onEscKeyDown: PropTypes.Requireable<(...args: any[]) => any>;
    /**
     * Callback fired when the overlay is clicked.
     */
    onOverlayClick: PropTypes.Requireable<(...args: any[]) => any>;
    /**
     * Control if the modal is open or not.
     */
    open: PropTypes.Validator<boolean>;
    /**
     * An object containing classNames to style the modal, can have properties 'overlay' (classname for overlay div), 'modal' (classname for modal content div), 'closeButton' (classname for the button that contain the close icon), 'closeIcon' (classname for close icon svg). You can customize the transition with 'transitionEnter', 'transitionEnterActive', 'transitionExit', 'transitionExitActive'
     */
    classNames: PropTypes.Requireable<object>;
    /**
     * An object containing the styles objects to style the modal, can have properties 'overlay', 'modal', 'closeButton', 'closeIcon'.
     */
    styles: PropTypes.Requireable<object>;
    /**
     * The content of the modal.
     */
    children: PropTypes.Requireable<React.ReactNode>;
    /**
     * @internal
     */
    classes: PropTypes.Requireable<object>;
    /**
     * Is the dialog centered (**when you don't have a lot of content**).
     */
    center: PropTypes.Requireable<boolean>;
    /**
     * Show the close icon.
     */
    showCloseIcon: PropTypes.Requireable<boolean>;
    /**
     * Close icon size.
     */
    closeIconSize: PropTypes.Requireable<number>;
    /**
     * A valid svg path to show as icon.
     */
    closeIconSvgPath: PropTypes.Requireable<React.ReactNode>;
    /**
     * Animation duration in milliseconds.
     */
    animationDuration: PropTypes.Requireable<number>;
    /**
     * You can specify a container prop which should be of type `Element`. The portal will be rendered inside that element. The default behavior will create a div node and render it at the at the end of document.body.
     */
    container: PropTypes.Requireable<object>; // eslint-disable-line
  };
  constructor(props) {
    super(props);
    this.state = {
      showPortal: props.open
    };
    this.shouldClose = null;
  }

  componentDidMount() {
    // Block scroll when initial prop is open
    if (this.props.open) {
      this.handleOpen();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.showPortal && !this.state.showPortal) {
      this.handleClose();
    } else if (!prevProps.open && this.props.open) {
      this.handleOpen();
    }
  }

  componentWillUnmount() {
    if (this.props.open) {
      this.handleClose();
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!prevState.showPortal && nextProps.open) {
      return {
        showPortal: true
      };
    }
    return null;
  }

  handleOpen = () => {
    modalManager.add(this);
    this.blockScroll();
    document.addEventListener('keydown', this.handleKeydown);
  }

  handleClose = () => {
    modalManager.remove(this);
    this.unblockScroll();
    document.removeEventListener('keydown', this.handleKeydown);
  }

  handleClickOverlay = event => {
    if (this.shouldClose === null) {
      this.shouldClose = true;
    }

    if (!this.shouldClose) {
      this.shouldClose = null;
      return;
    }

    if (this.props.onOverlayClick) {
      this.props.onOverlayClick(event);
    }

    if (this.props.closeOnOverlayClick) {
      this.props.onClose(event);
    }

    this.shouldClose = null;
  }

  handleClickCloseIcon = event => {
    this.props.onClose(event);
  }

  handleKeydown = event => {
    // Only the last modal need to be escaped when pressing the esc key
    if (event.keyCode !== 27 || !modalManager.isTopModal(this)) {
      return;
    }

    if (this.props.onEscKeyDown) {
      this.props.onEscKeyDown(event);
    }

    if (this.props.closeOnEsc) {
      this.props.onClose(event);
    }
  }

  handleModalEvent = () => {
    this.shouldClose = false;
  }

  handleEntered = () => {
    if (this.props.onEntered) {
      this.props.onEntered();
    }
  }

  handleExited = () => {
    if (this.props.onExited) {
      this.props.onExited();
    }

    this.setState({ showPortal: false });
    this.unblockScroll();
  }

  unblockScroll = () => {
    // Restore the scroll only if there is no modal on the screen
    if (modalManager.modals().length === 0) {
      noScroll.off();
    }
  }

  // eslint-disable-next-line class-methods-use-this
  blockScroll() {
    noScroll.on();
  }

  render() {
    const {
      open,
      center,
      classes,
      classNames,
      styles,
      showCloseIcon,
      closeIconSize,
      closeIconSvgPath,
      animationDuration,
      container
    } = this.props;
    const { showPortal } = this.state;

    if (!showPortal) {
      return null;
    }

    return (
      <Portal container={container}>
        <CSSTransition
          in={open}
          appear
          classNames={{
            appear: 'transitionEnter',
            appearActive: 'transitionEnterActive',
            enter: 'transitionEnter',
            enterActive: 'transitionEnterActive',
            exit: 'transitionExit',
            exitActive: 'transitionExitActive'
          }}
          timeout={animationDuration}
          onEntered={this.handleEntered}
          onExited={this.handleExited}
        >
          <div
            className={cx(
              classes.overlay,
              center ? classes.overlayCenter : null,
              classNames.overlay
            )}
            onClick={this.handleClickOverlay}
            style={styles.overlay}
          >
            <div
              className={cx(classes.modal, classNames.modal)}
              style={styles.modal}
              onMouseDown={this.handleModalEvent}
              onMouseUp={this.handleModalEvent}
              onClick={this.handleModalEvent}
            >
              {this.props.children}
              {showCloseIcon && (
                <CloseIcon
                  classes={classes}
                  classNames={classNames}
                  styles={styles}
                  closeIconSize={closeIconSize}
                  closeIconSvgPath={closeIconSvgPath}
                  onClickCloseIcon={this.handleClickCloseIcon}
                />
              )}
            </div>
          </div>
        </CSSTransition>
      </Portal>
    );
  }
}

Modal.propTypes = {
  /**
   * Is the modal closable when user press esc key.
   */
  closeOnEsc: PropTypes.bool,
  /**
   * Is the modal closable when user click on overlay.
   */
  closeOnOverlayClick: PropTypes.bool,
  /**
   * Callback fired when the Modal is open and the animation is finished.
   */
  onEntered: PropTypes.func,
  /**
   * Callback fired when the Modal has exited and the animation is finished.
   */
  onExited: PropTypes.func,
  /**
   * Callback fired when the Modal is requested to be closed by a click on the overlay or when user press esc key.
   */
  onClose: PropTypes.func.isRequired,
  /**
   * Callback fired when the escape key is pressed.
   */
  onEscKeyDown: PropTypes.func,
  /**
   * Callback fired when the overlay is clicked.
   */
  onOverlayClick: PropTypes.func,
  /**
   * Control if the modal is open or not.
   */
  open: PropTypes.bool.isRequired,
  /**
   * An object containing classNames to style the modal, can have properties 'overlay' (classname for overlay div), 'modal' (classname for modal content div), 'closeButton' (classname for the button that contain the close icon), 'closeIcon' (classname for close icon svg). You can customize the transition with 'transitionEnter', 'transitionEnterActive', 'transitionExit', 'transitionExitActive'
   */
  classNames: PropTypes.object,
  /**
   * An object containing the styles objects to style the modal, can have properties 'overlay', 'modal', 'closeButton', 'closeIcon'.
   */
  styles: PropTypes.object,
  /**
   * The content of the modal.
   */
  children: PropTypes.node,
  /**
   * @internal
   */
  classes: PropTypes.object,
  /**
   * Is the dialog centered (**when you don't have a lot of content**).
   */
  center: PropTypes.bool,
  /**
   * Show the close icon.
   */
  showCloseIcon: PropTypes.bool,
  /**
   * Close icon size.
   */
  closeIconSize: PropTypes.number,
  /**
   * A valid svg path to show as icon.
   */
  closeIconSvgPath: PropTypes.node,
  /**
   * Animation duration in milliseconds.
   */
  animationDuration: PropTypes.number,
  /**
   * You can specify a container prop which should be of type `Element`. The portal will be rendered inside that element. The default behavior will create a div node and render it at the at the end of document.body.
   */
  container: PropTypes.object // eslint-disable-line
};

Modal.defaultProps = {
  classes: {},
  closeOnEsc: true,
  closeOnOverlayClick: true,
  onEntered: null,
  onExited: null,
  onEscKeyDown: null,
  onOverlayClick: null,
  showCloseIcon: true,
  closeIconSize: 28,
  closeIconSvgPath: (
    <path d='M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z' />
  ),
  classNames: {},
  styles: {},
  children: null,
  center: false,
  animationDuration: 500
};

polyfill(Modal);

export default Modal;
