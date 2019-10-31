const orientationService = (options) => {
    document.addEventListener('DOMContentLoaded', () => {
        let orientation;
        if (options.mobileOnly === undefined)
            options.mobileOnly = true;
        if (options.devMode === undefined)
            options.devMode = false;
        if (options.bgColor === undefined)
            options.bgColor = "#000";
        if (options.overlay === undefined)
            options.overlay = 'orientationOverlay';
        if (options.landscapePages === undefined || options.landscapePages.length < 1 || !Array.isArray(options.landscapePages)) {
            throw new Error('You must specify landscapePages');
        } else {
            const devMode = (consoleType, msg) => {
                if (options.devMode) {
                    switch (consoleType) {
                        case 'error':
                            console.error(msg);
                            break;
                        case 'log':
                            console.log(msg);
                            break;
                        case 'info':
                            console.info(msg);
                            break;
                        default:
                            throw new Error('devMode experienced unexpected behavior. Please create an issue on Github');
                    }
                }
            };
            const checkOrientation = (overlay) => {
                if (options.mobileOnly === true) {
                    devMode('info', 'Mobil mode only activated - Checking device type');
                    if (checkDeviceType())
                        try {
                            startService(overlay);
                        } catch (e) {
                            devMode('error', e);
                        }
                } else {
                    devMode('info', 'Mobile mode only disabled - Starting Service');
                    try {
                        startService(overlay);
                    } catch (e) {
                        devMode('error', e);
                    }
                }
            };
            const startService = (overlay) => {
                const path = window.location.pathname + window.location.hash;
                devMode('info', `Current path: ${path}`);
                if (options.landscapePages.includes(path) && isLandscape()) {
                    devMode('log', 'This page requires landscape and is in landscape');
                    overlay.style.display = "none";
                } else if (options.landscapePages.includes(path) && !isLandscape()) {
                    devMode('log', 'Overlay activated');
                    overlay.style.display = "flex";
                } else {
                    devMode('log', 'This page does not require landscape');
                }
            };
            const isLandscape = () => {
                if (checkIphone()) {
                    return orientation === 90 || orientation === -90;
                } else {
                    return orientation === 90 || orientation === 270;
                }
            };
            const setOverlayStyling = (elm) => {
                elm.style.display = "none";
                elm.style.position = "fixed";
                elm.style.left = "0";
                elm.style.top = "0";
                elm.style.width = "100%";
                elm.style.height = "100%";
                elm.style.zIndex = "1";
                elm.style.background = options.bgColor;
            };
            const checkDeviceType = () => {
                devMode('info', `Checking Device - User Agent: ${navigator.userAgent}`);
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            };
            const checkIphone = () => {
                devMode('info', 'Checking id device type is iPhone');
                return /iPhone/i.test(navigator.userAgent);
            };
            const overlayObj = document.getElementById(options.overlay);
            if (overlayObj === null) {
                throw new Error('No overlay element exists');
            } else {
                if (checkIphone()) {
                    orientation = window.orientation;
                } else {
                    orientation = screen.orientation.angle;
                }
                setOverlayStyling(overlayObj);
                checkOrientation(overlayObj);
                window.addEventListener('orientationchange', () => {
                    if (checkIphone()) {
                        orientation = window.orientation;
                    } else {
                        orientation = screen.orientation.angle;
                    }
                    checkOrientation(overlayObj);
                });
            }
        }
    });
};
module.exports.orientationService = orientationService;