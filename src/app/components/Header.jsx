import React from 'react';

const Header = () => {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <div>LOGO</div>
                    <div>INPUT</div>
                </div>
                <div>
                    BOTON
                </div>
            </div>
        </div>
    );
}

export default Header;
