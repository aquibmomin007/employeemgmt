import { Layout } from "antd"
import { Content } from "antd/lib/layout/layout"
import cx from "classnames"
import { useCallback, useState } from "react"
import { useTranslation } from "react-i18next"
import { createUseStyles } from "react-jss"
import { useHistory } from "react-router-dom"
import { fetchEmployeeDataPresent } from "../../helpers/apifetch"
import { CommonFooter, CommonHeader } from "../Common"
import { openNotificationWithIcon } from "../Common/notification"
import SearchComponent from "../Search"


const useStyles = createUseStyles({
    appMainContent: {
      color: 'white',
      minHeight: 'calc(100vh - 155px)'
    }
})

export const EmployeePage = () => {
    const classes = useStyles();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    const  { t } = useTranslation();

    const onSearch = useCallback((value: string) => {
        if (value) {
            setIsLoading(true)
            fetchEmployeeDataPresent(value)
                .then(res => {
                    console.log({res})
                    if(!res) {
                        setIsLoading(false)
                        openNotificationWithIcon(
                            'warning',
                            `No data found for: ${value}`,
                            'Please type correct employee name.'
                        )
                    } else {
                        setIsLoading(false)
                        history.push(`/overview/${value}`);
                    }
                }).catch(err => {
                    setIsLoading(false)
                    console.log(err)
                })
        } else {
            openNotificationWithIcon(
                'error',
                'Search field empty',
                'Please type correct employee name.'
            )
        }
    }, [history])

    return(
        <Layout>
            <CommonHeader />
            <Content className={cx(classes.appMainContent, "display-flex align-items-center justify-content-center")}>
                <SearchComponent 
                    title={t('search.title')}
                    loading={isLoading}
                    onSearch={onSearch}
                />
            </Content>
            <CommonFooter footerText={ t('footer.copyright') }/>
      </Layout>
    )
}