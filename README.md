# Backend Rincon Matero
---

![Schema Design](./schema/image.png)


This is the back-end of rincon matero system. [Rincon Matero Front-end](https://github.com/nahuelRo/rincon-matero-front) connects here.

### Technologies
The project is developed in:
   
* [node.js](https://nodejs.org/es) 
* [express.js](https://expressjs.com/es/) 
* [postgreSQL.js](https://www.postgresql.org/) 
* [sequelize.js](https://sequelize.org/) 

### Required programs
---

In order to use the project on localhost it is necessary to clone it and have some necessary programs:

 * [node.js](https://nodejs.org/es) v18.17.1 lts or Higher.
 * Development IDE of your convenience Ej. [VS Code](https://code.visualstudio.com/)
 * PostMan for APIS tests. (Optional)
 * GIT to manage versions.

### How to Clone
---

Command to clone:

```bash
git clone https://github.com/nahuelRo/rincon-matero-back.git
```

### Install
---

Once the project is cloned, it is necessary to install all the dependencies with the command:

```bash
npm install
```

you have to configure some environment variables

```bash
SEQUELIZE_DB = 
SECRET_PASSWORD = 
PORT =
```


In addition to cloning it, you will need to create a database on your localhost with postgresql and seed the data

```bash
createdb "SEQUELIZE_DB"  // create db
npm run seed            // seed data
```

Run en LocalHost:

```bash
npm start
```

### Upload changes
---

To upload the changes we use 4 branches, Both bugfixes and features are merged into the development branch.

* Main (Production branch)
* Develop (Development branch)
* feature/your_new_feature 
* bugfix/bug_fixed 


### Structure folders
---

- api
- ├── /models
- ├── /controllers
- ├── /config
- ├── /routes
- ├── /utils
- └── server.js


### Collaborators
---

<p>
Agustin Sandoval
</p>

<a href="https://github.com/Tute22">
<img width="30px" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>
</a>
<a href="https://www.linkedin.com/in/agustín-andres-sandoval-641950267/"><img src="https://camo.githubusercontent.com/c318b8d5ea2738bfb4338350dac7111fffc9442ce501546075579402de82e024/68747470733a2f2f637573746f6d2d69636f6e2d6261646765732e64656d6f6c61622e636f6d2f62616467652f2d4c696e6b6564696e2d626c75653f7374796c653d666f722d7468652d6261646765266c6f676f436f6c6f723d7768697465266c6f676f3d6c696e6b6564696e"/></a>



<p>
Kevin Nuñez
</p>
<a href="https://github.com/b1ractive">
<img width="30px" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>
</a>
<a href="https://www.linkedin.com/in/kevin-nuñez-455054214/"><img src="https://camo.githubusercontent.com/c318b8d5ea2738bfb4338350dac7111fffc9442ce501546075579402de82e024/68747470733a2f2f637573746f6d2d69636f6e2d6261646765732e64656d6f6c61622e636f6d2f62616467652f2d4c696e6b6564696e2d626c75653f7374796c653d666f722d7468652d6261646765266c6f676f436f6c6f723d7768697465266c6f676f3d6c696e6b6564696e"/></a>


<p>
Brian Barrientos
</p>

<a href="https://github.com/BrianBts">
<img width="30px" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>
</a>
<a href="https://www.linkedin.com/in/braian-barrientos-49591112a/"><img src="https://camo.githubusercontent.com/c318b8d5ea2738bfb4338350dac7111fffc9442ce501546075579402de82e024/68747470733a2f2f637573746f6d2d69636f6e2d6261646765732e64656d6f6c61622e636f6d2f62616467652f2d4c696e6b6564696e2d626c75653f7374796c653d666f722d7468652d6261646765266c6f676f436f6c6f723d7768697465266c6f676f3d6c696e6b6564696e"/></a>

<p>
Esteban Rodriguez
</p>

<a href="https://github.com/nahuelRo">
<img width="30px" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>
</a>
<a href="https://www.linkedin.com/in/esteban-nahuel-rodriguez-514775203/"><img src="https://camo.githubusercontent.com/c318b8d5ea2738bfb4338350dac7111fffc9442ce501546075579402de82e024/68747470733a2f2f637573746f6d2d69636f6e2d6261646765732e64656d6f6c61622e636f6d2f62616467652f2d4c696e6b6564696e2d626c75653f7374796c653d666f722d7468652d6261646765266c6f676f436f6c6f723d7768697465266c6f676f3d6c696e6b6564696e"/></a>
