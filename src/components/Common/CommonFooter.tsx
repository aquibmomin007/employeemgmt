import { Col, Row } from "antd"
import { Footer } from "antd/lib/layout/layout"
import classNames from "classnames";
import { createUseStyles } from "react-jss";
import { CommonFooterProps } from "./types";

const useStyles = createUseStyles({
    footer: {
        height: '40px',
        marginTop: '50px',
        background: '#001529',
        color: 'white',
        padding: '0'
    },
})

export const CommonFooter = ({ footerText }: CommonFooterProps) => {
    const classes = useStyles();

    return (
        <Footer
            className={classNames(classes.footer, "display-flex")}
        >
            <Row justify="center" align="middle" className="w-100">
                <Col span={20}>
                    {footerText}
                </Col>
            </Row>
        </Footer>
    )
}
