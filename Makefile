# variables
ENV := $(shell grep -w 'APP_ENV' .env)

# pls sort alphabetically except 'default'

default: env all

all:
	yarn start

env:
	rm -rf .env > /dev/null 2>&1
	cp src/Config/Parameters/local.env .env

lint:
	yarn eslint && yarn stylelint && yarn prettier

package:
	yarn install

webpack: 
	yarn build
