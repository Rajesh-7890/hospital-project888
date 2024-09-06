import { useState } from 'react';
import './card.css';

const Card = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      image: 'ayurvedic.jpg',
      title: 'AYURVEDA',
      description:
        'We enhance our service and patient care with an array of specialist doctors ranging from General Medicine, Surgery, ENT, Ophthalmology, Panchakarma, Psychiatry, Geriatrics, Orthopedics, Gynecology, Antenatal, Postnatal care and Pediatrics.',
    },
    {
      image: 'diabetes.png',
      title: 'DIABETES',
      description:
        'We not only offered diabetology, but also supported by complementary specialty services like radiology, endocrinology, podiatry etc. Standardized patient care protocols will ensure outcomes that will benchmark with the worlds best institutes.',
    },
    {
      image: 'vitreo.jpg',
      title: 'VITREO RETINA',
      description:
        'The vitreo retinal department Podiatry Deals with diseases of the posterior segment of the eye. The department is well equipped with state of the art equipments like 3D ultrasonography, Carl Zeiss visupac 450 digitised angiography system e.t.c.',
    },
    {
      image: 'catract.jpg',
      title: 'CATRACT SURGERY',
      description:
        'We have different types of ultrasound scan like A-scan (IOL Master) and B-scan and also uses the popular Auto refractometer. All the above help gauge the intensity of the cataract and find the accurate Intra Ocular Lens (IOL) required.',
    },
    {
      image: 'glaucoma.jpg',
      title: 'GLAUCOMA',
      description:
        'The glaucoma department is well equipped with the latest technologies to establish the clinical diagnosis of glaucoma. Glaucoma treatment may include prescription eye drops, laser, or microsurgery. Treatment of choice varies with the type of glaucoma.',
    },
  ];

  const cardsToShow = 4;

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const visibleCards = [
    ...cards.slice(currentIndex, currentIndex + cardsToShow),
    ...cards.slice(0, Math.max(0, currentIndex + cardsToShow - cards.length)),
  ];

  return (
    <div className="carousel-container">
      <button className="left-button" onClick={handlePrev}>
        &#9664;
      </button>

      <div className="carousel">
        <div className="carousel-track">
          {visibleCards.map((card, index) => (
            <div key={index} className="carousel-card">
              <img src={card.image} alt={card.title} />
              <h2>{card.title}</h2>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      <button className="right-button" onClick={handleNext}>
        &#9654;
      </button>
    </div>
  );
};

export default Card;
