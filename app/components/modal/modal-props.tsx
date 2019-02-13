export interface Props {
  /**
   * Is the modal closable when user press esc key.
   */
  closeOnEsc?: boolean;
  /**
   * Is the modal closable when user click on overlay.
   */
  closeOnOverlayClick?: boolean;
  /**
   * Callback fired when the Modal is open and the animation is finished.
   */
  onEntered?: () => void;
  /**
   * Callback fired when the Modal has exited and the animation is finished.
   */
  onExited?: () => void;
  /**
   * Callback fired when the Modal is requested to be closed by a click on the overlay or when user press esc key.
   */
  onClose: (event: any) => void;
  /**
   * Callback fired when the escape key is pressed.
   */
  onEscKeyDown?: (event: any) => void;
  /**
   * Callback fired when the overlay is clicked.
   */
  onOverlayClick?: (event: any) => void;
  /**
   * Control if the modal is open or not.
   */
  open: boolean;
  /**
   * An object containing classNames to style the modal, can have properties 'overlay' (classname for overlay div), 'modal' (classname for modal content div),
   * 'closeButton' (classname for the button that contain the close icon), 'closeIcon' (classname for close icon svg).
   * You can customize the transition with 'transitionEnter', 'transitionEnterActive', 'transitionExit', 'transitionExitActive'
   */
  classNames?: any;

  classes?: any;
  /**
   * An object containing the styles objects to style the modal, can have properties 'overlay', 'modal', 'closeButton', 'closeIcon'.
   */
  styles?: any;
  /**
   * Is the dialog centered (**when you don't have a lot of content**).
   */
  center?: boolean;
  /**
   * Show the close icon.
   */
  showCloseIcon?: boolean;
  /**
   * Close icon size.
   */
  closeIconSize?: number;
  /**
   * A valid svg path to show as icon.
   */
  closeIconSvgPath?: any;
  /**
   * Animation duration in milliseconds.
   */
  animationDuration?: number;
  /**
   * You can specify a container prop which should be of type `Element`. The portal will be rendered inside that element.
   * The default behavior will create a div node and render it at the at the end of document.body.
   */
  container?: any;
}
