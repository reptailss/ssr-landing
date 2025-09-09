import React from 'react'
import { HomeHeroWidget } from '@client-pages/home/widgets/hero'
import { HomeProductsWidget } from '@client-pages/home/widgets/products'
import { HomeSmartSocietyWidget } from '@client-pages/home/widgets/smartSociety'
import { HomeFeedbackWidget } from '@client-pages/home/widgets/feedback'
import { FooterExpanded } from '@client-shared/layouts/footer/FooterExpanded'
import { HomeNewsWidget } from '@client-pages/home/widgets/news'
import { Header } from '@client-shared/layouts/header/Header'
import { HomePageContent } from '@common/pagesContent/home'
import { NewsDto } from '@common/dto/newsDto'

export function HomePage({
                             pageContent,
                             lastNewsList,
                         }: {
    pageContent: Partial<HomePageContent>
    lastNewsList: NewsDto[]
}) {
    
    return (
        <>
            
            <Header
                hasDesktopPositionAbsolute
                hasDesktopBgTransparent
            />
            
            {pageContent.heroWidget && <HomeHeroWidget
                content={pageContent.heroWidget}
            />}
            
            {pageContent.productsWidget && <HomeProductsWidget
                content={pageContent.productsWidget}
            />}
            
            {pageContent.smartSocietyWidget &&  <HomeSmartSocietyWidget
                content={pageContent.smartSocietyWidget}
            />}
            
            {pageContent.feedbackWidget &&  <HomeFeedbackWidget
                content={pageContent.feedbackWidget}
            >
                {lastNewsList.length >= 1 &&
                    <HomeNewsWidget
                        newsDtoList={lastNewsList}
                    />}
            </HomeFeedbackWidget>}
            
            <FooterExpanded showMap />
        
        </>
    )
}