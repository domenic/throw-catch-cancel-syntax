let throw = macro {
  rule { cancel $reason:expr } => {
    throw { __throwCancel: $reason }
  }

  rule { $exception:expr } => {
    throw $exception
  }
}

// TODO lots of duplication here!
let catch = macro {
  case {
    $name cancel ($reason:ident) {
      $catchCancelBody ...
    } $name ($exception:ident) {
      $catchBody ...
    }
  } => {
    return #{
      catch ($exception) {
        const throwCancelReason = $value.__throwCancel;
        if (throwCancelReason === undefined) {
          $catchBody ...
        } else {
          let $reason = throwCancelReason;
          $catchCancelBody ...
        }
      }
    }
  }

  case {
    $name ($exception:ident) {
      $catchBody ...
    } $name cancel ($reason:ident) {
      $catchCancelBody ...
    }
  } => {
    return #{
      catch ($value) {
        const throwCancelReason = $value.__throwCancel;
        if (throwCancelReason === undefined) {
          $catchBody ...
        } else {
          let $reason = throwCancelReason;
          $catchCancelBody ...
        }
      }
    }
  }

  case {
    $name cancel ($reason:ident) {
      $catchCancelBody ...
    }
  } => {
    return #{
      catch ($reason) {
        const throwCancelReason = $reason.__throwCancel;
        if (throwCancelReason === undefined) {
          throw $reason;
        } else {
          $reason = throwCancelReason;
          $catchCancelBody ...
        }
      }
    }
  }

  case {
    $name ($exception:ident) {
      $catchBody ...
    }
  } => {
    return #{
      catch ($exception) {
        const throwCancelReason = $exception.__throwCancel;
        if (throwCancelReason === undefined) {
          $catchBody ...
        } else {
          throw $exception;
        }
      }
    }
  }

  case {
    $name($args ...)
  } => {
    return #{
      catch($args ...)
    }
  }
}

export throw;
export catch;
