# Moove Laravel App

This MVC app contains models, routes, templates, and business logic that are consumed by React components.


## Setup dev environment

Windows Only:

- [Install wsl2](https://docs.microsoft.com/en-us/windows/wsl/install)
- [Install Docker Desktop](https://www.docker.com/products/docker-desktop)
- [Install wsl remote extension](https://code.visualstudio.com/docs/remote/wsl) for VS Code if using VS Code

From a linux/wsl terminal:

- `git clone https://git.cardiff.ac.uk/c1537237/large-team-project-moove.git`
- `cd laravel-moove`
- `./vendor/bin/sail up`

This will build the containers specified in `docker-compose.yml`. 

While working with css/js assets, run `npm run watch` to recompile assets after saving.

You can add a bash alias so that you can type `sail` to run commands by typing `nano  _~/.bashrc_`  then adding `alias sail='bash vendor/bin/sail'` at the bottom .

### Useful links:
- [Laravel Sail docs](https://laravel.com/docs/9.x/sail)
- [Artisan docs](https://laravel.com/docs/5.4/artisan)


## Run Tests

From `./laravel-moove` run `sail test` (or `./vendor/bin/sail test` if you didn't set a bash alias yet).