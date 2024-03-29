#!/usr/bin/env bash

DEFAULT_VERSION="5.2.1.git"

VERSION="`git describe 2> /dev/null | sed -e 's/^collectd-//'`"

if test -z "$VERSION"; then
	VERSION="$DEFAULT_VERSION"
fi

VERSION="`echo \"$VERSION\" | sed -e 's/-/./g'`"

if [ ! `echo $VERSION | cut -d. -f 1 | grep "^[[:digit:]]*\$"` ]; then
	VERSION="$DEFAULT_VERSION"
fi

echo -n "$VERSION"
