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
            const checkOrientation = (overlay) => {
                if (options.mobileOnly === true) {
                    if (options.devMode)
                        console.log('Mobil mode only activation');
                    if (checkDeviceType()) {
                        startService(overlay);
                    }
                } else {
                    startService(overlay);
                }

            };

            const startService = (overlay) => {
                const path = window.location.pathname;
                if (options.devMode)
                    console.log(path);
                if (options.landscapePages.includes(path) && isLandscape()) {
                    if (options.devMode)
                        console.log('This page requires landscape and is in landscape');
                    overlay.style.display = "none";
                    return true;
                } else if (options.landscapePages.includes(path) && !isLandscape()) {
                    if (options.devMode)
                        console.log('Overlay activated');
                    overlay.style.display = "flex";
                } else {
                    if (options.devMode)
                        console.log('This page does not require landscape');
                }
            };

            const isLandscape = () => {
                return orientation === 90 || orientation === 270;
            };

            const setOverlayStyling = (elm) => {
                elm.style.display = "none";
                elm.style.position = "absolute";
                elm.style.left = "0";
                elm.style.top = "0";
                elm.style.width = "100%";
                elm.style.height = "100vh";
                elm.style.background = options.bgColor;
            };

            const checkDeviceType = () => {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            };

            const overlayObj = document.getElementById(options.overlay);
            if (overlayObj === null) {
                throw new Error('No overlay element exists');
            } else {
                orientation = screen.orientation.angle;
                setOverlayStyling(overlayObj);
                checkOrientation(overlayObj);
                window.addEventListener('orientationchange', () => {
                    orientation = screen.orientation.angle;
                    checkOrientation(overlayObj);
                });
            }
        }
    });
};

module.exports.orientationService = orientationService;