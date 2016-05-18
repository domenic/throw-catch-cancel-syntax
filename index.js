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
        if (!$exception || !Object.prototype.hasOwnProperty.call($exception, "__throwCancel")) {
          $catchBody ...
        } else {
          let $reason = $exception.__throwCancel;
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
      catch ($exception) {
        if (!$exception || !Object.prototype.hasOwnProperty.call($exception, "__throwCancel")) {
          $catchBody ...
        } else {
          let $reason = $exception.__throwCancel;
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
        if (!$reason || !Object.prototype.hasOwnProperty.call($reason, "__throwCancel")) {
          throw $reason;
        } else {
          $reason = $reason.__throwCancel;
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
        if (!$exception || !Object.prototype.hasOwnProperty.call($exception, "__throwCancel")) {
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
