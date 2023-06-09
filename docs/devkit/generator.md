# Maker

Using that bundle you can generate your endpoints vary fast. At first you need to copy manifest file:

```bash
cp vendor/zabachok/symfobooster/manifest-example.yml manifest.yml
```

Change values in manifest.yml and run command to generate files:
```bash
./bin/console make:endpoint
```

If your file have different name then you can use option --manifest to set it:
```bash
./bin/console make:endpoint --manifest=my-manifest.yml
```

dry-run - генерировать файлы в отдельную папку  
force - переписывать файлы