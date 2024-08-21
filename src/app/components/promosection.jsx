import React from 'react';
import { Carousel } from 'react-bootstrap';
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
                    <h3>First Slide</h3>
                    <p>sjfbkjsfbsfjk</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className="w-full h-[200px] opacity-60"
                    src="/images/carousel3.jpeg" 
                />
                <Carousel.Caption>
                    <h3>First Slide</h3>
                    <p>sjfbkjsfbsfjk</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}