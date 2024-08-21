import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PromoSection() {

    return (
        <Carousel className="w-full mx-auto">
            <Carousel.Item>
                <img 
                    className="w-full h-[200px] opacity-60"
                    src="/images/carousel1.jpeg" 
                />
                <Carousel.Caption>
                    <h3>Promotional Items</h3>
                    <p>Save up to 35% with code BVT2024</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className="w-full h-[200px] opacity-60"
                    src="/images/carousel2.jpeg" 
                />
                <Carousel.Caption>
                    <h3>FREE T-SHIRT</h3>
                    <p>Receive a free BVT tee when you attend any meeting.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className="w-full h-[200px] opacity-60"
                    src="/images/carousel3.jpeg" 
                />
                <Carousel.Caption>
                    <h3>Limited Time Only</h3>
                    <p>All shirts 100% off.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}