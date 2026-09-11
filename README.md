#### MIDDLEWARE

##Repo pour cours de middleware - M2ALMA

**lien du cour** : https://dbalouek1.gitlabpages.inria.fr/middleware-labs/

---

# Synthèse du TP1

## TP-10 : Gestionnaire de ressources (OAR / Grid'5000)
- **Découverte de Grid'5000** : infrastructure de calcul distribué, accès via SSH et Jupyter Notebooks.
- **OAR** : gestionnaire de ressources de Grid'5000.
- **Réservation de nœuds** :
  - `oarsub` pour réserver des ressources.
  - `-I` = mode interactif.
  - `-t` = spécification des job.
  - `-p` = sélection d'un cluster/site précis.
  - `-l` = durée et nombre de ressources demandées.
- **Suivi des jobs** : `oarstat -u` pour lister ses réservations en cours.
- **Jobs scriptés** : soumission d'un script bash (`oarsub -S ./script.sh`), redirection automatique de la sortie standard/erreur vers des fichiers `OAR.<jobid>.stdout` / `.stderr`.

**Compétence** : réserver et gérer des ressources de calcul distribué via un ordonnanceur de jobs (OAR).

---

## TP-11 : Environnement Node.js
- **Installation** d'un environnement Node.js/npm sur un nœud Grid'5000.
- **Node.js** : exécution JavaScript côté serveur, asynchrone et orienté événements.
- **npm** : gestion de dépendances (`npm init`, `npm install <package>`).
- **Packages utilisés** : `express` (serveur web), `ip` (récupération d'adresse IP), `ejs` (templates dynamiques).
- **Redirection de port SSH** (`ssh -NL`) pour accéder à un serveur distant depuis sa machine locale.

**Compétence** : déployer et exécuter une application Node.js/Express sur une machine distante, et y accéder en local via un tunnel SSH.

---

## TP-12 : Générateur de données (application Node.js complète)
- **Combinaison de plusieurs packages** :
  - `express` = serveur HTTP,
  - `ip` = adresse réseau,
  - `ejs` = rendu de pages dynamiques,
  - `clone` = copie d'objets,
  - `axios` = requêtes HTTP (client),
  - `date-format`, `random` = génération de données temporelles et aléatoires.
- **Génération de données aléatoires** selon des distributions **uniforme** et **normale**.
- **Contrôle d'un flux de génération** via des commandes **Start / Stop / DeleteAll**.
- **Architecture client/serveur** : un serveur (`main-data-generator.js`) exposant une API, testé par un script client (`test-data-generator.js`) et visualisé via une page web (EJS/HTML).

**Compétence** : concevoir un micro-service Node.js générant et exposant des données simulées, utile pour tester la charge d'autres applications.

---
