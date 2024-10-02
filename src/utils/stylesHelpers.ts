

export function selectedStyles<A, B>({ currentPathName, matchPathName, stylesTrue, stylesFalse }: { currentPathName: string, matchPathName: string, stylesTrue: A, stylesFalse: B }) {
  if (matchPathName === currentPathName) {
    return stylesTrue
  }
  return stylesFalse
}