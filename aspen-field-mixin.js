
    /**
     * This mixin provides the fields and methods necessary to support a text field.
     * @polymerMixin
     * @mixinFunction
     */
    export const AspenFieldMixin = (superclass) => class extends superclass {
        
        static get properties(){
            return {

                /** The icon for the field. */
                icon:{
                    type: String,
                    value: ''
                },

                hasIcon:{
                    type: Boolean,
                    computed: '__computeHasIcon(icon)'
                },

                /** The text of the field's label. */
                label:{
                    type: String,
                    value: ''
                },

                /** The value of the field. */
                value: {
                    type: String,
                    value: ''
                }
            }
        }

        /**
         * This method determines if the icon has been set.
         * @param icon the name of the icon.
         */
        __computeHasIcon(icon){
            return icon != null && icon != '';
        }
    }

