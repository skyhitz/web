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
  Android: function(userAgent) {
    return /Android/i.test(userAgent) && !Platform.Windows(userAgent);
  },
  BlackBerry: function(userAgent) {
    return /BlackBerry|BB10|PlayBook/i.test(userAgent);
  },
  iPhone: function(userAgent) {
    return (
      /iPhone/i.test(userAgent) &&
      !Platform.iPad(userAgent) &&
      !Platform.Windows(userAgent)
    );
  },
  iPod: function(userAgent) {
    return /iPod/i.test(userAgent);
  },
  iPad: function(userAgent) {
    return /iPad/i.test(userAgent);
  },
  iOS: function(userAgent) {
    return (
      Platform.iPad(userAgent) ||
      Platform.iPod(userAgent) ||
      Platform.iPhone(userAgent)
    );
  },
  Opera: function(userAgent) {
    return /Opera Mini/i.test(userAgent);
  },
  Windows: function(userAgent) {
    return /Windows Phone|IEMobile|WPDesktop/i.test(userAgent);
  },
  KindleFire: function(userAgent) {
    return /Kindle Fire|Silk|KFAPWA|KFSOWI|KFJWA|KFJWI|KFAPWI|KFAPWI|KFOT|KFTT|KFTHWI|KFTHWA|KFASWI|KFTBWI|KFMEWI|KFFOWI|KFSAWA|KFSAWI|KFARWI/i.test(
      userAgent
    );
  },
  any: function(userAgent) {
    return (
      Platform.Android(userAgent) ||
      Platform.BlackBerry(userAgent) ||
      Platform.iOS(userAgent) ||
      Platform.Opera(userAgent) ||
      Platform.Windows(userAgent)
    );
  }
};

export default Platform;
