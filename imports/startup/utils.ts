/** Redirect to Login page when user is not logged in */
export default function forceLogin(location: any, replaceWith: (route: string) => void) {
  if (Meteor.user() === null) {
    replaceWith('/login');
  }
}
