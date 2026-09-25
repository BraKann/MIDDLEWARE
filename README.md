#### MIDDLEWARE

## Repo pour cours de middleware - M2ALMA

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

# Synthèse du TP2

## TP-20 : Docker
- **Installation de Docker** sur un nœud Grid'5000 (`g5k-setup-docker -t`).
- **Conteneur** : unité isolée exécutant une application avec ses dépendances, indépendamment de l'hôte.
- **Test de l'installation** via `docker run hello-world`, illustrant le cycle : pull de l'image → création du conteneur → exécution → sortie streamée vers le client.

**Compétence** : comprendre le principe de conteneurisation et valider une installation Docker fonctionnelle.

---

## TP-21 : Minikube et kubectl
- **Minikube** : cluster Kubernetes local à un seul nœud, utile pour développer/tester sans infrastructure cloud.
- **kubectl** : CLI de pilotage d'un cluster Kubernetes (`get pods`, `get nodes`, `describe node`).
- **Namespaces** : organisation des ressources internes du cluster (`kube-system` pour les composants Kubernetes eux-mêmes).

**Compétence** : installer et interroger un cluster Kubernetes local via kubectl.

---

## TP-22 : Dice Roll (application Node.js à conteneuriser)
- Reprise d'une application Node.js (lancer un ou plusieurs dés) comme base pour les TP suivants de conteneurisation.
- Premier contact avec le `Dockerfile` : structure (`FROM`, `WORKDIR`, `COPY`, `RUN`, `EXPOSE`, `CMD`).

**Compétence** : préparer une application Node.js en vue de son packaging dans une image Docker.

---

## TP-23 : DockerHub
- **Build d'une image** (`docker build --tag ...`) et **publication sur DockerHub** (`docker tag`, `docker login`, `docker push`).
- **Débogage d'image** : erreur `Cannot find module 'node:zlib'` liée à une version de Node incompatible (`node:15`) avec les dépendances (`express`/`body-parser`) → résolution en changeant l'image de base pour `node:20-alpine`.
- **Exécution locale d'une image publiée** (`docker run --publish`) et vérification via `docker ps` / `docker stop`.

**Compétence** : publier une image Docker sur un registre public et diagnostiquer un problème de compatibilité de version au sein d'une image.

---

## TP-24 : Kubernetes - Pods et Services (impératif)
- **Pod** : plus petite unité déployable de Kubernetes, encapsulant un ou plusieurs conteneurs ; non redémarré automatiquement en cas d'arrêt.
- **Création impérative** de pods (`kubectl run --image=...`) et exposition via un **Service NodePort** (`kubectl expose pod --type=NodePort`).
- **Découverte de l'URL d'accès** via `minikube service list`.

**Compétence** : déployer manuellement une image Docker sous forme de Pod Kubernetes et l'exposer via un Service.

---

## TP-25 : Pods déclaratifs (YAML)
- Passage d'une approche **impérative** (commandes `kubectl run`/`expose`) à une approche **déclarative** via des manifestes `.yaml` (`kind: Pod`, `kind: Service`).
- **Reproductibilité** : `kubectl create -f fichier.yaml` recrée exactement la même configuration à partir d'un fichier versionnable.
- **Nettoyage des ressources** (`kubectl delete --all pods/services`).

**Compétence** : décrire une infrastructure Kubernetes de façon déclarative et reproductible via YAML.

---

## TP-26 : Deployments
- **Deployment** : abstraction de haut niveau gérant un **ReplicaSet**, qui maintient un nombre défini d'instances (répliques) d'un Pod.
- Différence clé avec un Pod nu : un Deployment **recrée automatiquement** un Pod défaillant, contrairement à un Pod isolé.
- Utilisation de `kind: Deployment` (au lieu de `kind: Pod`) associé à un `Service` pour l'exposition réseau.

**Compétence** : déployer une application de façon résiliente et gérable via l'abstraction Deployment de Kubernetes.

---

## TP-27 : Calculatrice (pipeline complet Node.js → Docker → Kubernetes)
- **Implémentation d'une API de calcul** (`Add`, `Subtract`, `Multiply`, `Divide`) en Node.js/Express, via `Array.prototype.reduce()` pour agréger un tableau de nombres selon l'opération demandée.
- **Conteneurisation complète** : écriture du `Dockerfile`, build et publication de l'image sur DockerHub.
- **Déploiement Kubernetes** : écriture des manifestes `Deployment` + `Service` (NodePort), test de bout en bout via `test-simple-calculator.js` pointant vers l'URL exposée par `minikube service list`.
- **Bilan** : pipeline intégral, de l'écriture du code métier jusqu'à son exécution dans un cluster Kubernetes à partir d'une image publique — la même image pouvant être redéployée telle quelle par un tiers (l'évaluateur) simplement en appliquant les fichiers YAML.

**Compétence** : mettre en œuvre un pipeline complet de développement, conteneurisation et déploiement Kubernetes d'un micro-service, prêt à être exécuté de façon autonome et reproductible par un tiers.
