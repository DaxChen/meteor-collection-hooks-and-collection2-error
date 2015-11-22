# meteor-collection-hooks-and-collection2-error

## When insert with meteor.method collection hook before.insert won't run on server side...

There's a `console.log` in before.insert hook, but can only be seen on the
client side. Server won't show the message, but checks the schema first and
fails.

## To reproduce:

1. Clone this repo

1. run it with `meteor`

1. goto `localhost`, open console and click the button

1. only client side runs the before.insert hook, server side fails
