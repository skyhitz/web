/**
 * # Checks whether running on a mobile device according to browser data.
 * Functions (each returns bool):
 * * Android
 * * BlackBerry
 * * iPhone
 * * iPod
 * * iPad
 * * iOS
 * * Opera
 * * Windows
 * * Kindle Fire
 * * any
 * @example
 * Platform.Android(this.props.userAgent) => true/false
 * Platform.iOS(this.props.userAgent) => true/false
 * Platform.any(this.props.userAgent) => true/false
 * Platform.KindleFire(this.props.userAgent) => true/false
 * Platform.BlackBerry(this.props.userAgent) => true/false
 */

const Platform = {
  Android(userAgent) {
    return /Android/i.test(userAgent) && !Platform.Windows(userAgent);
  },
  BlackBerry(userAgent) {
    return /BlackBerry|BB10|PlayBook/i.test(userAgent);
  },
  iPhone(userAgent) {
    return (
      /iPhone/i.test(userAgent) &&
      !Platform.iPad(userAgent) &&
      !Platform.Windows(userAgent)
    );
  },
  iPod(userAgent) {
    return /iPod/i.test(userAgent);
  },
  iPad(userAgent) {
    return /iPad/i.test(userAgent);
  },
  iOS(userAgent) {
    return (
      Platform.iPad(userAgent) ||
      Platform.iPod(userAgent) ||
      Platform.iPhone(userAgent)
    );
  },
  Opera(userAgent) {
    return /Opera Mini/i.test(userAgent);
  },
  Windows(userAgent) {
    return /Windows Phone|IEMobile|WPDesktop/i.test(userAgent);
  },
  KindleFire(userAgent) {
    return /Kindle Fire|Silk|KFAPWA|KFSOWI|KFJWA|KFJWI|KFAPWI|KFAPWI|KFOT|KFTT|KFTHWI|KFTHWA|KFASWI|KFTBWI|KFMEWI|KFFOWI|KFSAWA|KFSAWI|KFARWI/i.test(
      userAgent
    );
  },
  any(userAgent) {
    return (
      Platform.Android(userAgent) ||
      Platform.BlackBerry(userAgent) ||
      Platform.iOS(userAgent) ||
      Platform.Opera(userAgent) ||
      Platform.Windows(userAgent)
    );
  },
};

export default Platform;
