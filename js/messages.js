const default_page = `Welcome to Notevate.

Swipe down to create your motivational note (a great quote, a warm-and-fuzzy memory or a nudge to keep you on track) and swipe up to delete it.

Love,
The Notevate Team.`

const onboarding = [
  'Swipe down to create your first motivational note: a great quote, a warm-and-fuzzy memory or a nudge to keep you on track.',
  'Write your motivational note and save it for a rainy day. We don’t keep your personal data, so your notes only exist on your device.',
  'Swipe up to delete your motivational note. We don’t keep your personal data, so your deleted notes are gone forever.'
]

export default {
  default_page,
  onboarding,
  add_placeholder: 'What keeps you motivated?',
  delete_title: 'Delete this note?',
  delete_body: 'Your note will be permanently deleted.'
}
