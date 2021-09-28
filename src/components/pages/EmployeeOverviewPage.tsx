import { Layout, Row, Button, message, Space } from "antd"
import { LinkOutlined, LeftOutlined } from '@ant-design/icons';

import { useCallback, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { createUseStyles } from "react-jss"

import { Link, RouteComponentProps } from "react-router-dom"
import Graph from "react-graph-vis";

import { CommonFooter, CommonHeader } from "../Common"
import { LoadingState, NoDataState } from "./States"

import { fetchEmployeeDataForGraph } from "../../helpers/apifetch"
import GraphOptions from "./graph-options"

const { Content } = Layout

const useStyles = createUseStyles({
    appMainContent: {
      color: 'white',
      minHeight: 'calc(100vh - 155px)',
      paddingTop: '50px'
    },
    treeBlock: {
        background: '#f0f2f5',
        minWidth: '400px'
    },
    toggleTree: {
        position: 'relative', 
        top: '5px'
    }
})

export const EmployeeOverviewPage = (props:RouteComponentProps<{guid: string}>) => {
    const classes = useStyles();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    const [nodes, setNodes]  = useState<any[]>([]);
    const [edges, setEdges]  = useState<any[]>([]);

    const { match: { params: { guid } } } = props;
    const  { t } = useTranslation();

    useEffect(() => {
        setIsLoading(true)
        if (guid) {
            fetchEmployeeDataForGraph(guid)
                .then(([n, e]) => {
                    setIsLoading(false); setNodes(n); setEdges(e);
                })
                .catch(() => {
                    setIsLoading(false); setNodes([]); setEdges([]);
                })
        } else {
            setIsLoading(false); setNodes([]); setEdges([]);
        }

        return () => {
            setNodes([]); setEdges([]);
        }
    }, [guid])

    const graph = { nodes, edges };
    const dataAvailable = (nodes.length && edges.length) || (nodes.length === 1)

    const handleShare = useCallback(() => {
        navigator
            .clipboard
            .writeText(window.location.href)
            .then(() => {
                message.info('Copied to clipboard!');
            })
    }, [])

    return (
        <Layout>
            <CommonHeader>
                <Row className="display-flex flex-direction-row justify-content-sb w-100">
                    <Link to="/">
                        <Button size="large" type="primary" icon={<LeftOutlined />}>{t(`common.backSearchButton`)}</Button>
                    </Link>
                    <Space direction="vertical">
                        <Button size="large" type="link" onClick={handleShare} icon={<LinkOutlined />}>{t(`common.shareButton`)}</Button>
                    </Space>
                </Row>
            </CommonHeader>
            <Content className={classes.appMainContent}>
                <Row className="display-flex align-items-center flex-direction-column justify-content-center">
                    {
                        dataAvailable ?
                            <Graph graph={graph} options={GraphOptions} />
                            : (
                                isLoading ? 
                                    <LoadingState /> :
                                    <NoDataState guid={guid} />
                            )
                    }
                </Row>
            </Content>
            <CommonFooter footerText={ t('footer.copyright') }/>
      </Layout>
    )
}