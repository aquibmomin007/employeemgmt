import { Spin, Typography } from "antd"
import { useTranslation } from "react-i18next"
import { createUseStyles } from "react-jss"

const { Title } = Typography

const useStyles = createUseStyles({
    noFoundLabelName: {
        fontStyle: 'italic',
        color: '#903939'
    }
})

export const LoadingState = () => {
    const { t } = useTranslation()
    return (
        <>
            <Spin size="large"/>
            <Title level={4}>{t(`common.loadingText`)}</Title>
        </>
    )
}

export const NoDataState = ({ guid }: { guid: string }) => {
    const { t } = useTranslation()
    const classes = useStyles()

    return (
        <Title level={2}>
            {guid ? (
                <>
                    {t(`overview.noDataFound`)}
                    <span className={classes.noFoundLabelName}>{guid}</span>
                </>
            ): (
                <>
                    {t(`overview.noDataSelectionFound`)}
                </>
            )}
        </Title>
    )
}