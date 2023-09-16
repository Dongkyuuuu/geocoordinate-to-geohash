# #!/bin/bash
set -e

yarn test
yarn build
yarn publish