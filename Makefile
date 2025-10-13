.PHONY: install dev build start lint clean audit test

default: install dev

install:
	@echo "Installing dependencies. This won't take long."
	npm install

dev:
	@echo "Starting dev server. Go to http://localhost:10000 when you're ready."
	npm run dev

build:
	@echo "Building for production."
	npm run build

start:
	@echo "Starting production server. Visit http://localhost:10000."
	npm run start

lint:
	@echo "Running linter. Let's see what you broke."
	npm run lint

audit:
	@echo "Checking for vulnerabilities. Spoiler: there aren't any."
	npm audit

clean:
	@echo "Removing build artifacts and node_modules. Starting fresh."
	rm -rf .next
	rm -rf node_modules
	rm -rf dist
	@echo "Done. Clean slate."
