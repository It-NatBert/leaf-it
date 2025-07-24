# Pré-requis

L'installation de ce projet requiert:

- Docker - [https://docs.docker.com/engine/install/ ]
- PhP 8.2 ou plus - [https://www.php.net/manual/en/install.php]
- Symfony CLI - [https://symfony.com/download]
- Node - [https://nodejs.org/en/download]

# Installation

- La première étape est de télécharger en local le projet depuis le repository GitHub correspondant: [https://github.com/It-NatBert/leaf-it]
```shell
git clone [url-du_repo]
```

- Une fois le repo cloné en local il est nécessaire d'installer les modules PHP et Node
``` shell
composer install
npm install
```

- Il est ensuite nécessaire de construire le container docker de la base de données
```shell
docker compose build
```

- Il est obligatoire de créer un fichier .env.local à la racine du projet. Pour obtenir son contenu, s'adresser a l'équipe de dev.
# Lancement du projet

- L'architecture du projet est tel que:
    - Front-End: React
    - Back-End: Symfony
    - Base de donnée: MariaDB + PhPMyAdmin
- Par conséquent afin de développer dans les bonnes conditions il est nécessaire de lancer ces trois parties tel que:

``` shell
# Lancement de la BDD
docker compose up -d

# Lancement du serveur Symfony
symfony serve

# Lancement du serveur react
npm run watch
```

Arrivé ici en vous connectant a l'adresse fournie par Symfony à son lancement (typiquement [localhost:8000]) vous devriez arriver sur la page d'accueil.
