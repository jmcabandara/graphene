export default {
    init: {
        lib: "/usr/local/lib/softhsm/libsofthsm2.so",
        libName: "SoftHSM",
        pin: "12345",
        vendor: "",
    },
    controlValues: {
        module: {
            manufacturerID: "SoftHSM",
            libraryDescription: "Implementation of PKCS11",
        },
        slot: {
            slotIndex: 0,
            token: {
                flags: 1069,
                label: "My slot 0",
                manufacturerID: "SoftHSM project",
                serialNumber: "1a918b5db0a83cb1",
                minPinLen: 4,
            },
            mechanisms: 72,
        },
        slotsCount: 2,
    },
};
