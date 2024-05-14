# Testsetup with Deno, Bun and Node

## Compare headersizes with httpie
``` $ http :9998 x-test:$(yes "#" | head -32000 | tr -d "\n") ```
