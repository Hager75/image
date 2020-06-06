@extends('admin.index')
@section('title','Users')
@section('section_title','Create User')
@section('content')
<!-- Main content -->
<section class="content">
    <div class="container-fluid">
        <div class="row">
            <!-- left column -->
            <div class="col-md-12 my-3">
                <!-- jquery validation -->
                <div class="card card-primary">
                    @include('admin.error')
                    <div class="card-header">
                        <h3 class="card-title">Create User</h3>
                    </div>
                    <!-- /.card-header -->
                    <!-- form start -->
                    {{-- 'first_name','last_name','mobile','avatar','national_id','role','email','password', --}}
                    <form method="POST" action="{{route('users.store')}}" enctype="multipart/form-data">
                        @csrf
                        <div class="card-body">
                            <div class="form-group">
                                <label for="exampleInputaddress">Image</label>
                                <input type="file" name="profile" class="form-control" id="exampleInputarea"
                                    placeholder="Enter Image">
                            </div>
                            <div class="row mb-3">
                                <div class="col input-group">
                                    <input type="text" class="form-control" id="first_name"  autofocus
                                        placeholder="First Name" name="first_name">
                                    <div class="input-group-append">
                                        <div class="input-group-text">
                                            <span class="fas fa-user"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col input-group">
                                    <input type="text" class="form-control" id="last_name" type="text" 
                                        autofocus placeholder="Last Name" name="last_name">
                                    <div class="input-group-append">
                                        <div class="input-group-text">
                                            <span class="fas fa-user"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputaddress">Email</label>
                                <input type="text" name="email" class="form-control" id="exampleInputemail"
                                    placeholder="Enter email">
                            </div>
                            <div class="form-group">
                                Role
                                <select class="custom-select" name="role">
                                    <option value="0">user</option>
                                    <option value="1">investor</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputaddress">Mobile</label>
                                <input type="text" name="mobile" class="form-control" id="exampleInputMobile"
                                    placeholder="Enter Mobile">
                            </div>

                            <div class="form-group">
                                <label for="exampleInputaddress">National ID</label>
                                <input type="text" name="national_id" class="form-control" id="exampleInputnational"
                                    placeholder="Enter National_ID">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputaddress">Password</label>
                                <input type="password" name="password" class="form-control" id="exampleInputpassword"
                                    placeholder="Enter password">
                            </div>

                        </div>
                        <!-- /.card-body -->
                        <div class="card-footer">
                            <button type="submit" class="btn btn-primary">Create</button>
                        </div>
                </div>
                </form>
            </div>
            <!-- /.card -->
        </div>
        <!--/.col (left) -->
        <!-- right column -->
        <div class="col-md-6">

        </div>
        <!--/.col (right) -->
    </div>
    <!-- /.row -->
    </div><!-- /.container-fluid -->
</section>
<!-- /.content -->


@endsection
