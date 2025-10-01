import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../components/ProductList';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="hero bg-gradient-to-r from-amber-100 to-amber-200 rounded-lg p-8 mb-12">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-amber-800">Bienvenue au Grenier</h1>
            <p className="py-6 text-amber-700">
              Découvrez nos délicieuses pâtisseries et pains artisanaux faits avec amour et des ingrédients de qualité.
            </p>
            <Link to="/products" className="btn btn-primary bg-amber-600 hover:bg-amber-700 text-white">
              Voir nos produits
            </Link>
          </div>
        </div>
      </section>

      <section className="featured-products mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Nos produits populaires</h2>
        <ProductList limit={4} />
      </section>

      <section className="about bg-white rounded-lg shadow-md p-8 mb-12">
        <h2 className="text-3xl font-bold text-center mb-6">À propos de nous</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Notre histoire</h3>
            <p className="text-gray-700">
              Le Grenier a ouvert ses portes en 2025 avec une passion pour la boulangerie et la pâtisserie de qualité.
              Nous utilisons des méthodes traditionnelles et des ingrédients frais pour vous offrir le meilleur.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Nos engagements</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Ingrédients frais et locaux</li>
              <li>Préparation artisanale</li>
              <li>Service personnalisé</li>
              <li>Innovation constante</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;