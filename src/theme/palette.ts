const palette: any = (mode: string) => {
    return {
        mode: mode,
        ...(mode === 'light'
            ? {
                primary: {
                    main: '#438eff',
                },
                secondary: {
                    main: '#8561f9',
                },
                success: {
                    main: '#2dcb73',
                },
                info: {
                    main: '#4ab0c1',
                },
                warning: {
                    main: '#f6b749',
                },
                error: {
                    main: '#ff6c6c',
                },
                light: {
                    main: '#eff2f7',
                },
                dark: {
                    main: '#141821',
                },
                black: {
                    main: '#000'
                },
                white: {
                    main: '#fff'
                }
            }
            : {
                primary: {
                    main: '#e6152a',
                },
                secondary: {
                    main: '#8561f9',
                },
                success: {
                    main: '#2dcb73',
                },
                info: {
                    main: '#4ab0c1',
                },
                warning: {
                    main: '#f6b749',
                },
                error: {
                    main: '#ff6c6c',
                },
                light: {
                    main: '#eff2f7',
                },
                dark: {
                    main: '#141821',
                },
                black: {
                    main: '#000'
                },
                white: {
                    main: '#fff'
                }
            }),
    };
};

export default palette;