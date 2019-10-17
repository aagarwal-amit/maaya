import {
    AUDIT_LOG_LOAD_START,
    AUDIT_LOG_LOADED,
    LOGOUT
} from '../../constants/actionTypes';

const defaultState = {
    isLoadingAuditLog: false,
    log: undefined
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case AUDIT_LOG_LOAD_START:
            return {
                ...state,
                isLoadingAuditLog: true
            };
        case AUDIT_LOG_LOADED:
            return {
                ...state,
                isLoadingAuditLog: false,
                log: action.error ? [] : action.payload
            };
        case LOGOUT:
            return {
                ...defaultState
            }
        default:
            return state
    }
};
