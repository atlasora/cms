# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npx strapi develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npx strapi start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npx strapi build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.

```

Create a PR and merge into main and it will rebuild the cloud


or

npx strapi deploy
```

## API

# TOKEN

Local (you will probably create your own)

d15828d4bf9052364598ac45bf483ab02f30b944434e5cba608f5c79bf3a808a1c1565b3291b4b6245867423616cf9582bda3739afc2f246ff99a86bff810b3f9f649e5b777b4d3aaa67e37034e542cbdc73dba5cd34e075c27b2b19fd4d51c775453e7765f826a4f1bc0074ba6c46c8473759e46e4246e19d2c3a15c3165387

production

https://wonderful-diamond-9e301caa9a.strapiapp.com/

# LOCATIONS

local
NEW TOKEN
28c456f4ce740e8ce94f695dce407db7667b363ea4e6966dbf47eda78dc05042cbb15a7ac500c4a7fdd3608f1229d257f7d8c314fa2e707ce73f6b37d004db09b1cfe7e9a3fcfee41d06093ce5cc169931c3718aee12b51f3b1a5e90415dd9434dc7a0747840bb01e1b179af889df1df71042dd96637ef45e13654b79142f2e7

curl -X GET http://localhost:1337/api/properties?populate=\* \
 -H "Authorization: Bearer 7b4923fb6ceed948c08e0795fb31cf74bd0b31cdd880775c5b1c8d8ce3c50acfdc7d1fba399d53426bc44581bf67c4e847e18417d91f3a90e85d8082771949d73f095a207d4a5874afa6031835a078b731277a8e1051ab8ae65dbd7f7dac76fdbaa8949a750cbe597660441587fc7cef89f47fd8d90f4e61804e64040c25a47c"

curl -X GET http://localhost:1337/api/locations?filters[City][$eqi]=london \
 -H "Authorization: Bearer d15828d4bf9052364598ac45bf483ab02f30b944434e5cba608f5c79bf3a808a1c1565b3291b4b6245867423616cf9582bda3739afc2f246ff99a86bff810b3f9f649e5b777b4d3aaa67e37034e542cbdc73dba5cd34e075c27b2b19fd4d51c775453e7765f826a4f1bc0074ba6c46c8473759e46e4246e19d2c3a15c3165387"

If you get no match then your terminal sucks and you have to format the brackets

URL-Encoded Version Explained:
[ becomes %5B

] becomes %5D

$ becomes %24

curl -X GET 'http://localhost:1337/api/locations?filters%5BCity%5D%5B%24eqi%5D=london' \
-H 'Authorization: Bearer d15828d4bf9052364598ac45bf483ab02f30b944434e5cba608f5c79bf3a808a1c1565b3291b4b6245867423616cf9582bda3739afc2f246ff99a86bff810b3f9f649e5b777b4d3aaa67e37034e542cbdc73dba5cd34e075c27b2b19fd4d51c775453e7765f826a4f1bc0074ba6c46c8473759e46e4246e19d2c3a15c3165387'

production

curl -X GET https://wonderful-diamond-9e301caa9a.strapiapp.com/api/locations/?populate=Images* \
 -H "Authorization: Bearer d3ebf900e7b11a63b8c9d4e407c1354a02837b611e2e54b8d603ece3aafc964acb528df06fb95223635e2fc5caa094daeede6aaf5f0ea1ba1d2e22819230b817e2f75dba206d1470b8ddff753fe84fe09aa2479b63e79fad8f27240be411e5c61d62831c344ffa6ab57c593cdfe4bc91fcacf01d35aed074dd9f533700385a17"

curl -X GET https://wonderful-diamond-9e301caa9a.strapiapp.com/api/locations/ \
 -H "Authorization: Bearer d3ebf900e7b11a63b8c9d4e407c1354a02837b611e2e54b8d603ece3aafc964acb528df06fb95223635e2fc5caa094daeede6aaf5f0ea1ba1d2e22819230b817e2f75dba206d1470b8ddff753fe84fe09aa2479b63e79fad8f27240be411e5c61d62831c344ffa6ab57c593cdfe4bc91fcacf01d35aed074dd9f533700385a17"

curl -X GET 'https://wonderful-diamond-9e301caa9a.strapiapp.com/api/locations?filters%5BCity%5D%5B%24eqi%5D=london' \
-H 'Authorization: Bearer d3ebf900e7b11a63b8c9d4e407c1354a02837b611e2e54b8d603ece3aafc964acb528df06fb95223635e2fc5caa094daeede6aaf5f0ea1ba1d2e22819230b817e2f75dba206d1470b8ddff753fe84fe09aa2479b63e79fad8f27240be411e5c61d62831c344ffa6ab57c593cdfe4bc91fcacf01d35aed074dd9f533700385a17'

TRANSFER TOKEN

To push the content from local

npx strapi transfer

remote url

https://wonderful-diamond-9e301caa9a.strapiapp.com/admin/

transfer token

7236ad96b1a1182dd1f83187ae011cb57860f696c8f4249ac037d4189b4560de0ba1ebdb518a31dee9b76087e4f893d19f88c98d635c5662f5fb2e04877322aaa628a9f93539f2341794725877b09e59125b9e3ba57bc6f108c67c1edf74904b1f739aa1fb142ec172c7beaf717cb65841f5212cb8b0ddc4c4bd3466e98c4b73

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>
