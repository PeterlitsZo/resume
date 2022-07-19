# Resume

## Usage

### Install dependencies

The project is using yarn as package manager. Use this code below to install
packages:

```bash
$ yarn
```

### Run in browser... Cool (Only for test and preview)

You can try to run this project in your browser:

```bash
$ yarn dev
```

If you try to run this application, you can find a resume show on your browser.
Cool. But how to change? It is easy:

* The page in store in `src/pages/`. You can change the `App.tsx` to get your
  resume. You can check the import statement of it.

Find any question? Report an issue.

### Build as a really server

You can use this command to build this project:

```bash
$ yarn build
```

All thing will put at the folder `./dist`. You can choose the static server you
like best. For example, use python (but I do not think use the http.server is
a good idea):

```bash
$ cd ./dist
$ sudo python3 -m http.server 80
```

Well, you can also use docker + nginx:

```bash
# Build a docker image `resume`!
$ docker build . -t resume
# Now you can run it!
$ docker run -p 80:80 -d resume
```

Save the image as a file and send it to your machine:

```bash
$ docker build . -t resume
$ docker save resume | bzip2 > resume.tar.bz2
$ rsync -avP ./resume.tar.bz2 <your host username>@<your host ip>:~
# Now use `ssh` and `ssh load` to get the image and run it!
```