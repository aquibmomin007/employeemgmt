import { Col, Layout, Row } from "antd"
import { createUseStyles } from "react-jss";
import { CommonHeaderProps } from "./types";
import classNames from "classnames";

const { Header } = Layout;

const useStyles = createUseStyles({
    appHeaderContent: {
        color: 'white',
    },
})

export const CommonHeader = (props: CommonHeaderProps) => {
    const classes = useStyles()

    return (
        <Header className="display-flex justify-content-center align-items-center">
            {props && props.children && (
                <Row className={classNames(classes.appHeaderContent, "w-100")} justify="center" align="middle">
                    <Col span={20} className="display-flex">
                        {props.children}
                    </Col>
                </Row>
            )}
        </Header>
    )
}