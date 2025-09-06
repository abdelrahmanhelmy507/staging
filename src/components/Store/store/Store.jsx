import React from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';




import Filter from './filter';
import HeroStore from './HeroStore';
import StoreAbout from './StoreAbout';

export default function Store() {
    // Static products data
    const products = [
        {
            id: 1,
            name: "اورمينيو",
            description: "نظام إدارة المطاعم والمقاهي المتكامل",
            price: 2500,
            originalPrice: 3000,
            image: "/api/placeholder/300/200",
            rating: 4.8,
            reviews: 124,
            discount: 17
        },
        {
            id: 2,
            name: "اورست",
            description: "نظام إدارة المخازن والمستودعات",
            price: 1800,
            originalPrice: 2200,
            image: "/api/placeholder/300/200",
            rating: 4.6,
            reviews: 89,
            discount: 18
        },
        {
            id: 3,
            name: "اوربوس كلاود",
            description: "نظام نقاط البيع السحابي المتطور",
            price: 3200,
            originalPrice: 4000,
            image: "/api/placeholder/300/200",
            rating: 4.9,
            reviews: 256,
            discount: 20
        },
        {
            id: 4,
            name: "اوراك",
            description: "نظام إدارة المحاسبة والمالية",
            price: 2800,
            originalPrice: 3500,
            image: "/api/placeholder/300/200",
            rating: 4.7,
            reviews: 167,
            discount: 20
        },
        {
            id: 5,
            name: "اورشوب",
            description: "منصة التجارة الإلكترونية المتكاملة",
            price: 4500,
            originalPrice: 5500,
            image: "/api/placeholder/300/200",
            rating: 4.8,
            reviews: 198,
            discount: 18
        },
        {
            id: 6,
            name: "اوركلينك",
            description: "نظام إدارة العيادات والمراكز الطبية",
            price: 3800,
            originalPrice: 4500,
            image: "/api/placeholder/300/200",
            rating: 4.9,
            reviews: 143,
            discount: 16
        },
        {
            id: 7,
            name: "اورهوتيل",
            description: "نظام إدارة الفنادق والمنتجعات",
            price: 5200,
            originalPrice: 6000,
            image: "/api/placeholder/300/200",
            rating: 4.7,
            reviews: 87,
            discount: 13
        },
        {
            id: 8,
            name: "اورسكول",
            description: "نظام إدارة المدارس والمؤسسات التعليمية",
            price: 3500,
            originalPrice: 4200,
            image: "/api/placeholder/300/200",
            rating: 4.6,
            reviews: 156,
            discount: 17
        },
        {
            id: 9,
            name: "اوركار",
            description: "نظام إدارة معارض ووكالات السيارات",
            price: 4200,
            originalPrice: 5000,
            image: "/api/placeholder/300/200",
            rating: 4.8,
            reviews: 98,
            discount: 16
        }
    ];

    return (
        
        <div className="store-container ">
            < HeroStore />
            < StoreAbout/>
              <Filter />
              
            
        </div>
       
    );
}