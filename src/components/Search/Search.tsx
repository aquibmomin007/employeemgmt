import { Col, Row, Typography } from 'antd';
import Search from 'antd/lib/input/Search'
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { createUseStyles } from 'react-jss';
import { SearchProps } from './types'

const { Title } = Typography;

const useStyles = createUseStyles({
    searchField: {
        maxWidth: '300px'
    }
})
export const SearchComponent = ({ loading, onSearch, title }: SearchProps) => {
    const { t } = useTranslation();
    const classes = useStyles();

    return (
        <Row justify="center" align="middle" className="w-100">
            <Col span={20} className="display-flex flex-direction-column justify-content-center align-items-center">
                {title && (
                    <Title level={2}>{title}</Title>
                )}
                <Search 
                    className={classNames(classes.searchField, "w-100 mt-2")}
                    placeholder={t('search.placeholder')} 
                    onSearch={onSearch} 
                    loading={loading}
                    size="large"
                    enterButton 
                />
            </Col>
        </Row>
    )
}
