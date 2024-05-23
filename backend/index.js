const express = require('express');
const path = require('path');

const app = express();

// Spécifie le dossier contenant les ressources statiques
app.use(express.static(path.join(__dirname, 'public')));

// Définit une route pour servir le fichier manifest.json
// Si le fichier manifest.json est dans le dossier public, il sera accessible à l'URL /manifest.json
