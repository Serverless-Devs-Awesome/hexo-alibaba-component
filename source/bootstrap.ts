export const DEFAULTBOOTSTRAP = `#!/usr/bin/env bash

export PORT={port}
{start}`;

export const DEFAULTPORT = 9000;

export const DEFAULTSTART = 'npx hexo server -p $PORT -s';