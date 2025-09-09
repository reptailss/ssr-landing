import React from 'react'
import { NewsDto } from '@common/dto/newsDto'
import styles from './styles.module.css'
import { Container } from '@client-ui/container'
import { HomeNewsWidgetListView } from '@client-pages/home/widgets/news/views/HomeNewsWidgetListView'

export const HomeNewsWidgetView = ({
                                       newsDtoList,
                                   }: {
    newsDtoList: NewsDto[]
}) => {
    return (
        <section
            className={styles.root}
        >
            <Container
                className={styles.container}
            >
                <HomeNewsWidgetListView
                    newsDtoList={newsDtoList}
                />
            </Container>
        </section>
    )
}

