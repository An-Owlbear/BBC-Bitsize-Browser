# BBC-Bitsize-Browser
A simple electron app for BBC Bitesize, only here so I can learn git.

## Installing from source

The exported version can be found on my mega page:

https://mega.nz/#F!Ti51zQbS!Dleiw_Ye7ls2bbEEb40X-Q

To install for modifying the program you will need electron, run the following command in the program folder.

```sh
npm install --save-dev electron
```

Build from source using electron builder.

To install electron builder:

```sh
npm install -g electron-builder
```

To build from source for windows:

```sh
build -w
```

To build for linux

```sh
build -l
```

Note: appimage on export doesn't work but the unpacked folder does.

To build for macOS:

```sh
build -m
```

## Installing from exports

Download the compressed file for your operating system from the exports folder, extract it and run the executable file.

## License

Licensed under MIT.
