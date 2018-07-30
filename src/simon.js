export function simonWinCondition(playerOutput, computerOutput) {
  for(var i=0; i<computerOutput.length; i++) {
    if(playerOutput[i] != computerOutput[i]){
      return false;
    }
  }
  return true;
}
