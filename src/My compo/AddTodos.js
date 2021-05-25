import React from 'react'

export default function AddTodos  () {

          return(
          <div className="container my-3">
            <h3>
              Add Todo
            </h3>
              <form>
  <div class="mb-3">
    <label for="title" class="form-label">Todo</label>
    <input type="title" class="form-control" id="title" aria-describedby="emailHelp" />
  </div>
  <div class="mb-3">
    <label for="desc" class="form-label">Description</label>
    <input type="password" class="form-control" id="desc" />
  </div>
  <button type="submit" class="btn btn-primary btn-sm btn-success">Submit</button>
</form>

          </div>
)
}