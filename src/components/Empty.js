import React from 'react';

const styles = {
  wrapper: {
    fontSize: '1.3rem',
    backgroundColor: 'rgba(0,0,0,0.15)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '8px 0',
    color: '#fff',
    height: '36px',
    fontWeight: 'bold',
  },
};

export const Empty = () => <div style={styles.wrapper}>Não possui todos</div>;

export default Empty;
