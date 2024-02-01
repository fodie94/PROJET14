# Migration d'une application jQuery vers React

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-303540?style=for-the-badge&logo=react&logoColor=61DAFB)

## Présentation

HRnet est une application web interne à WealthHealth qui gère les dossiers des employés.

Ce dépôt convertit les plugins de la bibliothèque jQuery de l'application en composants React pour gagner en performance et fiabilité.

Au lieu des 4 plugins jQuery, l'application utilise des composants React importés à partir de bibliothèques existantes, à l'exception du package Modal qui a été créé pour cette occasion.

Lien vers le site déployé : https://p14-h-rnet-ruddy.vercel.app/

Lien du dépôt du projet avec la bibliothèque jQuery : https://github.com/OpenClassrooms-Student-Center/P12_Front-end

## Installation du package

### 1/ Cloner ce dépôt

### 2/ Installer les dépendances : `npm install`

### 3/ Lancer l'application :

Dans le terminal, exécutez la commande : `npm start`

### 4/ Construire et prévisualiser :

Dans le terminal, exécutez les commandes :

`npm run build`
`npm install -g serve`
` serve -s build`

## Lien de la bibliothèque Modal convertie en React :

- @fodieniakate/modalep14 : https://www.npmjs.com/package/@fodieniakate/modalep14

## Liens des autres bibliothèques React :

- react-datepicker : https://www.npmjs.com/package/react-datepicker
- react-select : https://www.npmjs.com/package/react-select
- react-data-table-component : https://www.npmjs.com/package/react-data-table-component

## Prérequis

![npm](https://img.shields.io/badge/npm-9.1.3-%23000000?style=flat-square&logo=npm&logoColor=white)

![Node.js](https://img.shields.io/badge/Node.js-16.14.0-43853D?style=flat-square&logo=node.js&logoColor=white)

## Dépendances

![@fodieniakate/modalep14](https://img.shields.io/badge/fv--modal--react-%5E0.0.9-blue)

![react-datepicker](https://img.shields.io/badge/react--datepicker-%5E4.11.0-blue)

![react-select](https://img.shields.io/badge/react--select-%5E5.0.0-blue)

![react-data-table-component](https://img.shields.io/badge/react--data--table--component-%5E7.6.2-blue)
