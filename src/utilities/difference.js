import _ from "lodash"

export default function notInBoth(arrayOne, arrayTwo) {
    return _.difference(arrayOne, arrayTwo)

}