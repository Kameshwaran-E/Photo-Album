import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Shimmer from '../shimmer/Shimmer'
import './ImageGallery.css'

const ImageGallery = ({ page, setPage }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasPrevious, setHasPrevious] = useState(false);

  useEffect(() => {
    loadImages(page);
  }, [page]);

  const loadImages = (page) => {
    setLoading(true);
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=12`)
      .then(response => response.json())
      .then(newImages => {
        setImages(newImages);
        setHasPrevious(page > 1);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching images:', error);
        setLoading(false);
      });
  };

  const handlePrevious = () => {
    setPage(page => Math.max(page - 1, 1));
  };

  const handleNext = () => {
    setPage(page => page + 1);
  };

  return (
    <>
      <Row className="image-container">
        {loading
          ? Array.from({ length: 12 }).map((_, index) => (
              <Col key={index} xs={12} sm={6} md={4} lg={4} className="mb-4">
                <Shimmer />
              </Col>
            ))
          : images.map(image => (
              <Col key={image.id} xs={12} sm={6} md={4} lg={4} className="mb-4">
                <img
                  src={image.download_url}
                  alt={image.author}
                  className="img-fluid rounded"
                />
              </Col>
            ))}
      </Row>
      <Row className="justify-content-center my-4">
        <Col xs="auto">
          <button
            className="btn btn-primary"
            onClick={handlePrevious}
            disabled={!hasPrevious}
          >
            Previous
          </button>
        </Col>
        <Col xs="auto">
          <span className="page-number">Page {page}</span>
        </Col>
        <Col xs="auto">
          <button
            className="btn btn-primary"
            onClick={handleNext}
          >
            Next
          </button>
        </Col>
      </Row>
    </>
  );
};

export default ImageGallery;
