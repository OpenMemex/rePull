import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import PullItem from './PullItem';
import { REPOSITORY_SHAPE } from '../../../../constants/shapes';
import pullRepository from '../../../../api/repository/pull';

const PullItemContainer = ({ repository }) => {
    const handleClick = useCallback(async () => {
        await pullRepository(repository.id);
        console.log('pulled');
    }, [repository]);

    return (
        <PullItem onClick={handleClick}/>
    );
};

PullItemContainer.propTypes = {
    repository: PropTypes.shape(REPOSITORY_SHAPE).isRequired,
};

export default PullItemContainer;