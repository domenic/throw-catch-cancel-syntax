let throw = macro {
  rule { cancel $reason:expr } => {
    throw { __throwCancel: $reason }
  }

  rule { $exception:expr } => {
    throw $exception
  }
}

// TODO lots of duplication here!
let try = macro {
  case {
    $name {
      $tryBody ...
    } catch cancel ($reason:ident) {
      $catchCancelBody ...
    } catch ($exception:ident) {
      $catchBody ...
    }
  } => {
    return #{
      try {
        $tryBody ...
      } catch ($exception) {
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
    $name {
      $tryBody ...
    } catch ($exception:ident) {
      $catchBody ...
    } catch cancel ($reason:ident) {
      $catchCancelBody ...
    }
  } => {
    return #{
      try {
        $tryBody ...
      } catch ($exception) {
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
    $name {
      $tryBody ...
    } catch cancel ($reason:ident) {
      $catchCancelBody ...
    }
  } => {
    return #{
      try {
        $tryBody ...
      } catch ($reason) {
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
    $name {
      $tryBody ...
    } catch ($exception:ident) {
      $catchBody ...
    }
  } => {
    return #{
      try {
        $tryBody ...
      } catch ($exception) {
        if (!$exception || !Object.prototype.hasOwnProperty.call($exception, "__throwCancel")) {
          $catchBody ...
        } else {
          throw $exception;
        }
      }
    }
  }
}

export throw;
export try;
